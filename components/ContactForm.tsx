"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/70 via-slate-50 to-indigo-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Contact Me
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Let&apos;s connect — feel free to reach out with any questions or ideas!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 p-8 bg-white border border-gray-200 rounded-2xl shadow-md transition-all duration-300"
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows={5}
            required
            className="focus-visible:ring-2 focus-visible:ring-indigo-500 transition"
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </section>
  );
}
