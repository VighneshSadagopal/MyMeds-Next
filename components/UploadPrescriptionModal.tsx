"use client";

import { useState } from "react";
import { analyzePrescription } from "@/app/actions/analyzePrescription";

export default function UploadPrescriptionModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const data = await analyzePrescription(formData);
      setResult(data);
    } catch (err: any) {
      setError("Failed to analyze prescription");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Upload Prescription
      </button>

      {open && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Analyzing..." : "Upload"}
            </button>

            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </form>

          {error && <p className="error">{error}</p>}

          {result && (
            <div className="result">
              <h3>Extracted Data</h3>
              <p><strong>Medicines:</strong> {result.medicines.join(", ")}</p>
              <p><strong>Dosage:</strong> {result.dosage.join(", ")}</p>
              <p><strong>Frequency:</strong> {result.frequency.join(", ")}</p>
              <p><strong>Instructions:</strong> {result.instructions.join(", ")}</p>
              <p><strong>Keywords:</strong> {result.keywords.join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
