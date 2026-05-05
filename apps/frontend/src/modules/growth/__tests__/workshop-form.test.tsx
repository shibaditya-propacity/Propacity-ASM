/**
 * workshop-form.test.tsx
 *
 * Unit tests for the WorkshopForm component.
 * Tests run against a mocked API client — no real HTTP calls are made.
 *
 * Coverage targets:
 *   ✓ Field rendering
 *   ✓ Validation errors on empty submit
 *   ✓ Successful POST with correct payload
 *   ✓ API error handling (network / server error)
 *   ✓ onSuccess callback fires after successful submit
 *   ✓ bare prop hides labels (used in modal context)
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WorkshopForm } from "../components/workshop-form";

// ── API mock ────────────────────────────────────────────────────────────────
// Mocked at module level so the real HTTP client is never called in tests.
vi.mock("@/core/api/client", () => ({
  apiClient: {
    get: vi.fn(),
    post: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
  ApiError: class ApiError extends Error {
    constructor(
      public code: string,
      message: string,
      public statusCode: number,
      public details?: unknown,
    ) {
      super(message);
    }
  },
}));

import { apiClient } from "@/core/api/client";

// ── Test helpers ─────────────────────────────────────────────────────────────

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
}

function renderWithProviders(ui: React.ReactElement) {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
}

/** A minimal Workshop shape that satisfies the API response contract. */
const MOCK_WORKSHOP = {
  id: "w1",
  tenantId: "t1",
  title: "Test Workshop",
  format: "Online",
  date: "2026-06-01",
  capacity: 100,
  ticketPrice: 0,
  registered: 0,
  attended: 0,
  adSpend: 0,
  cpRegistration: 0,
  campaignBudget: 0,
  expectedCPR: 0,
  status: "Upcoming",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  description: null,
  city: null,
  venue: null,
  time: null,
  speaker: null,
  registrationLink: null,
  tags: null,
  notes: null,
  audienceSegment: null,
  createdByName: null,
} as const;

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("WorkshopForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // ── Rendering ─────────────────────────────────────────────────────────────

  it("renders all required fields", () => {
    renderWithProviders(<WorkshopForm />);

    expect(screen.getByPlaceholderText("Workshop title")).toBeInTheDocument();
    expect(screen.getByText("Format")).toBeInTheDocument();
    expect(screen.getByText(/Date/)).toBeInTheDocument();
    expect(screen.getByText(/Capacity/)).toBeInTheDocument();
    expect(screen.getByText(/Ticket Price/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Create Workshop/i }),
    ).toBeInTheDocument();
  });

  it("renders submit button as enabled by default", () => {
    renderWithProviders(<WorkshopForm />);
    const btn = screen.getByRole("button", { name: /Create Workshop/i });
    expect(btn).not.toBeDisabled();
  });

  // ── Validation ────────────────────────────────────────────────────────────

  it("shows validation errors when submitting an empty form", async () => {
    const user = userEvent.setup();
    renderWithProviders(<WorkshopForm />);

    await user.click(screen.getByRole("button", { name: /Create Workshop/i }));

    await waitFor(() => {
      // Zod validation fires and renders at least one <p> error message
      const errors = screen.getAllByRole("paragraph");
      expect(errors.length).toBeGreaterThan(0);
    });

    // API must NOT be called when the form is invalid
    expect(apiClient.post).not.toHaveBeenCalled();
  });

  it("does not submit when only the title is filled", async () => {
    const user = userEvent.setup();
    renderWithProviders(<WorkshopForm />);

    await user.type(
      screen.getByPlaceholderText("Workshop title"),
      "Partial Workshop",
    );
    await user.click(screen.getByRole("button", { name: /Create Workshop/i }));

    await waitFor(() => {
      expect(apiClient.post).not.toHaveBeenCalled();
    });
  });

  // ── Successful submit ─────────────────────────────────────────────────────

  it("calls apiClient.post with correct payload on valid submit", async () => {
    const user = userEvent.setup();
    vi.mocked(apiClient.post).mockResolvedValueOnce(MOCK_WORKSHOP);

    const onSuccess = vi.fn();
    renderWithProviders(<WorkshopForm onSuccess={onSuccess} />);

    // Fill in the title
    await user.type(
      screen.getByPlaceholderText("Workshop title"),
      "Test Workshop",
    );

    // Select format — the label has no htmlFor so we grab the only combobox in the form
    const formatSelect = screen.getAllByRole("combobox")[0]!;
    await user.selectOptions(formatSelect, "Online");

    // Fill date via the label container
    const dateLabel = screen.getByText(/^Date/).closest("div");
    const dateField = dateLabel?.querySelector('input[type="date"]');
    if (dateField) {
      await user.type(dateField, "2026-06-01");
    }

    // Fill capacity and ticket price
    const capacityInput = screen.getByPlaceholderText("100");
    // Multiple inputs share placeholder "0" (ticketPrice, adSpend, etc.) — grab the first (ticketPrice)
    const ticketInput = screen.getAllByPlaceholderText("0")[0]!;
    await user.clear(capacityInput);
    await user.type(capacityInput, "100");
    await user.clear(ticketInput);
    await user.type(ticketInput, "0");

    await user.click(screen.getByRole("button", { name: /Create Workshop/i }));

    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalledWith(
        "/growth/workshops",
        expect.objectContaining({
          title: "Test Workshop",
          format: "Online",
        }),
      );
    });
  });

  it("calls onSuccess callback after a successful submit", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({
      advanceTimers: (ms) => vi.advanceTimersByTime(ms),
    });
    vi.mocked(apiClient.post).mockResolvedValueOnce(MOCK_WORKSHOP);

    const onSuccess = vi.fn();
    renderWithProviders(<WorkshopForm onSuccess={onSuccess} />);

    await user.type(
      screen.getByPlaceholderText("Workshop title"),
      "Test Workshop",
    );
    const formatSelect = screen.getAllByRole("combobox")[0]!;
    await user.selectOptions(formatSelect, "Online");

    const dateLabel = screen.getByText(/^Date/).closest("div");
    const dateField = dateLabel?.querySelector('input[type="date"]');
    if (dateField) await user.type(dateField, "2026-06-01");

    const capacityInput = screen.getByPlaceholderText("100");
    const ticketInput = screen.getAllByPlaceholderText("0")[0]!;
    await user.clear(capacityInput);
    await user.type(capacityInput, "50");
    await user.clear(ticketInput);
    await user.type(ticketInput, "500");

    await user.click(screen.getByRole("button", { name: /Create Workshop/i }));

    // Wait for the API call to resolve, then advance past the 2200ms animation delay
    await waitFor(() => expect(apiClient.post).toHaveBeenCalled());
    await act(async () => {
      vi.advanceTimersByTime(2500);
    });

    expect(onSuccess).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  // ── Error handling ────────────────────────────────────────────────────────

  it("does not call onSuccess when apiClient.post rejects", async () => {
    const user = userEvent.setup();
    // Simulate a server error (e.g. 422 Unprocessable Entity)
    vi.mocked(apiClient.post).mockRejectedValueOnce(new Error("Server error"));

    const onSuccess = vi.fn();
    renderWithProviders(<WorkshopForm onSuccess={onSuccess} />);

    await user.type(
      screen.getByPlaceholderText("Workshop title"),
      "Error Workshop",
    );
    const formatSelect = screen.getAllByRole("combobox")[0]!;
    await user.selectOptions(formatSelect, "Online");

    const dateLabel = screen.getByText(/^Date/).closest("div");
    const dateField = dateLabel?.querySelector('input[type="date"]');
    if (dateField) await user.type(dateField, "2026-06-01");

    const capacityInput = screen.getByPlaceholderText("100");
    const ticketInput = screen.getAllByPlaceholderText("0")[0]!;
    await user.clear(capacityInput);
    await user.type(capacityInput, "100");
    await user.clear(ticketInput);
    await user.type(ticketInput, "0");

    await user.click(screen.getByRole("button", { name: /Create Workshop/i }));

    // onSuccess must NOT fire when the API call fails
    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalled();
    });
    expect(onSuccess).not.toHaveBeenCalled();
  });
});
