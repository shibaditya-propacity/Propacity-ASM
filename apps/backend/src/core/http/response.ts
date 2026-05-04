import type { Response } from "express";

export const ok = <T>(res: Response, data: T, meta?: object): Response =>
  res.status(200).json({ ok: true, data, ...(meta && { meta }) });

export const created = <T>(res: Response, data: T): Response =>
  res.status(201).json({ ok: true, data });

export const noContent = (res: Response): Response => res.status(204).send();
