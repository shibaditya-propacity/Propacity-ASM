import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WorkshopForm } from "../components/workshop-form";

// Mock the apiClient so no real HTTP calls are made
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
      public details?: unknown
    ) {
      super(message);
    }
  },
}));

import { apiClient } from "@/core/api/client";

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
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}

describe("WorkshopForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all required fields", () => {
    renderWithProviders(<WorkshopForm />);

    expect(screen.getByPlaceholderText("Workshop title")).toBeInTheDocument();
    expect(screen.getByText("Format")).toBeInTheDocument();
    expect(screen.getByText(/Date/)).toBeInTheDocument();
    expect(screen.getByText(/Capacity/)).toBeInTheDocument();
    expect(screen.getByText(/Ticket Price/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Create Workshop/i })).toBeInTheDocument();
  });

  it("shows validation errors when submitting empty form", async () => {
    const user = userEvent.setup();
    renderWithProviders(<WorkshopForm />);

    await user.click(screen.getByRole("button", { name: /Create Workshop/i }));

    await waitFor(() => {
      // Title is required - zod min(1) triggers
      const errors = screen.getAllByRole("paragraph");
      expect(errors.length).toBeGreaterThan(0);
    });

    // apiClient.post should NOT have been called
    expect(apiClient.post).not.toHaveBeenCalled();
  });

  it("calls apiClient.post with correct data on valid submit", async () => {
    const user = userEvent.setup();
    const mockWorkshop = {
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
    };

    vi.mocked(apiClient.post).mockResolvedValueOnce(mockWorkshop);

    const onSuccess = vi.fn();
    renderWithProviders(<WorkshopForm onSuccess={onSuccess} />);

    // Fill in required fields
    await user.type(screen.getByPlaceholderText("Workshop title"), "Test Workshop");

    const formatSelect = screen.getByRole("combobox", { name: /Format/i });
    await user.selectOptions(formatSelect, "Online");

    const dateInput = screen.getByDisplayValue("");
    // Date input - find via label
    const dateLabel = screen.getByText(/^Date/).closest("div");
    const dateField = dateLabel?.querySelector('input[type="date"]');
    if (dateField) {
      await user.type(dateField, "2026-06-01");
    }

    const capacityInput = screen.getByPlaceholderText("100");
    await user.clear(capacityInput);
    await user.type(capacityInput, "100");

    const ticketPriceInput = screen.getByPlaceholderText("0");
    await user.clear(ticketPriceInput);
    await user.type(ticketPriceInput, "0");

    await user.click(screen.getByRole("button", { name: /Create Workshop/i }));

    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalledWith(
        "/growth/workshops",
        expect.objectContaining({
          title: "Test Workshop",
          format: "Online",
        })
      );
    });
  });
});
