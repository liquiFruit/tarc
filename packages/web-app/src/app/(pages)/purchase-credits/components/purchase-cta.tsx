"use client"

import { SubmitButton } from "@/components/functional/submit-button"
import { toast } from "@/components/ui/sonner"

import { tryGeneratePurchaseLink } from "../actions"

export function PurchaseCTA({ index }: { index: number }) {
  async function formAction() {
    const result = await tryGeneratePurchaseLink({ priceOption: index })
  }

  return (
    <form action={formAction}>
      <SubmitButton
        variant={index === 1 ? "default" : "secondary"}
        className="mt-2 w-full"
        text="Buy now"
        pendingText="Buying..."
      />
    </form>
  )
}
