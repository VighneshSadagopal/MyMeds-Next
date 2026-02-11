"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminAddProductForm() {
  const [inStock, setInStock] = React.useState(true);
  const [rating, setRating] = React.useState(4);
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(false);

  const [form, setForm] = React.useState({
    productName: "",
    productCategory: "",
    productSKU: "",
    productPrice: "",
    productDescription: "",
  });

  const currentRating = hoverRating ?? rating;

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function Star({ index }: { index: number }) {
    const active = index <= currentRating;

    return (
      <span
        className={[
          "material-symbols-outlined cursor-pointer select-none transition-colors",
          active ? "text-amber-400" : "text-slate-300 dark:text-slate-600",
        ].join(" ")}
        style={{
          fontVariationSettings: active
            ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
            : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        }}
        onMouseEnter={() => setHoverRating(index)}
        onMouseLeave={() => setHoverRating(null)}
        onClick={() => setRating(index)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setRating(index);
        }}
      >
        star
      </span>
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: form.productName,
          productCategory: form.productCategory,
          productSKU: form.productSKU,
          productPrice: Number(form.productPrice),
          productRating: rating,
          productDescription: form.productDescription,
          productStock: inStock ? 1 : 0,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        alert((data as any)?.message || "Failed to add product");
        return;
      }

      alert("✅ Product added successfully!");

      setForm({
        productName: "",
        productCategory: "",
        productSKU: "",
        productPrice: "",
        productDescription: "",
      });
      setRating(4);
      setInStock(true);
    } catch {
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-[#2b8cee]">
            <span className="material-symbols-outlined">info</span> General
            Information
          </h3>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Product Name
            </label>
            <Input
              name="productName"
              value={form.productName}
              onChange={updateField}
              className="h-12 rounded-lg border-slate-200 focus-visible:ring-primary dark:border-slate-700 dark:bg-slate-800"
              placeholder="e.g. Paracetamol 500mg Extra Relief"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Category
              </label>
              <Select
                value={form.productCategory}
                onValueChange={(value) =>
                  setForm({ ...form, productCategory: value })
                }
              >
                <SelectTrigger className="h-12 rounded-lg border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medicine">Medicine</SelectItem>
                  <SelectItem value="syrup">Syrup</SelectItem>
                  <SelectItem value="device">Medical Device</SelectItem>
                  <SelectItem value="supplements">Supplements</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                SKU Number
              </label>
              <Input
                name="productSKU"
                value={form.productSKU}
                onChange={updateField}
                className="h-12 rounded-lg border-slate-200 focus-visible:ring-primary dark:border-slate-700 dark:bg-slate-800"
                placeholder="e.g. MED-7742"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Product Price ($)
              </label>
              <Input
                name="productPrice"
                type="number"
                value={form.productPrice}
                onChange={updateField}
                className="h-12 rounded-lg border-slate-200 focus-visible:ring-primary dark:border-slate-700 dark:bg-slate-800"
                placeholder="0.00"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Stock Status
              </label>
              <div className="flex h-12 items-center gap-3">
                <Switch
                  checked={inStock}
                  onCheckedChange={setInStock}
                  className="data-[state=checked]:bg-primary"
                />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Initial Product Rating
            </label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} index={i} />
              ))}
              <span className="ml-2 self-center text-sm font-normal text-slate-500">
                ({rating.toFixed(1)} stars default)
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-[#2b8cee]">
            <span className="material-symbols-outlined">image</span> Media &
            Details
          </h3>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Product Image
            </label>

            <div
              className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800"
              role="button"
              tabIndex={0}
            >
              <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-primary/10 text-[#2b8cee] transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">
                  upload_file
                </span>
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                Click to upload or drag and drop
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                PNG, JPG or WEBP (max. 2MB)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Product Description
            </label>
            <Textarea
              name="productDescription"
              value={form.productDescription}
              onChange={updateField}
              rows={6}
              className="rounded-lg border-slate-200 bg-white p-4 text-sm focus-visible:ring-primary dark:border-slate-700 dark:bg-slate-800"
              placeholder="Provide a detailed description of the medicine, including dosage instructions, ingredients, and side effects..."
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-end gap-4 sm:flex-row">
        <Button
          type="button"
          variant="outline"
          className="w-full rounded-lg border-slate-200 px-8 py-6 text-sm font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 sm:w-auto"
        >
          Cancel &amp; Discard
        </Button>

        <Button
          type="submit"
          disabled={loading}
          className="w-full gap-2 rounded-lg bg-primary px-10 py-6 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 sm:w-auto"
        >
          <span className="material-symbols-outlined text-lg">check_circle</span>
          {loading ? "Saving..." : "Save Product"}
        </Button>
      </div>
    </form>
  );
}
