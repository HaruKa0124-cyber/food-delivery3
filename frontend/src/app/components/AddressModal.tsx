"use client"

interface AddressModalProps {
  open: boolean
  onClose: () => void
}

export function AddressModal({ open, onClose }: AddressModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[502px] bg-white rounded-[20px]  h-[288px] p-[24px]">
        <div className="flex flex-col gap-[24px]">
        <h2 className="text-[24px] font-semibold mb-2 text-[#09090b]">
          Please write your delivery address!
        </h2>

        <input
          placeholder="Please share your complete address"
          className="w-[454px] h-[80px] border rounded-[6px]"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="w-[79px] h-[40px] border-[1px] rounded-[6px]"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="w-[115px] h-[40px] border-[1px] rounded-[6px] bg-[#18181b] text-[#fafafa]"
          >
            Deliver Here
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}
