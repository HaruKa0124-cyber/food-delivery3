"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Upload, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { api } from "@/lib/axios"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CreateCategoryDialog } from "./CreateCategoryDialog"


const foodFormSchema = z.object({
  name: z.string().min(2),
  price: z.string().refine((v) => !isNaN(Number(v))),
  image: z.string().min(1),
  ingredients: z.string().min(5),
  categoryId: z.string().min(1),
})

type FoodFormValues = z.infer<typeof foodFormSchema>

type Category = {
  _id: string
  name: string
}


export const CreateFoodDialog = () => {
  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [uploadedImageUrl, setUploadedImageUrl] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const form = useForm<FoodFormValues>({
    resolver: zodResolver(foodFormSchema),
    defaultValues: {
      name: "",
      price: "",
      ingredients: "",
      image: "",
      categoryId: "",
    },
  })


  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    const res = await fetch(
      `/api/upload?filename=${encodeURIComponent(file.name)}`,
      { method: "POST", body: file }
    )

    const data = await res.json()
    setUploadedImageUrl(data.url)
    form.setValue("image", data.url)
    setIsUploading(false)
  }

  const removeImage = () => {
    setUploadedImageUrl("")
    form.setValue("image", "")
    if (fileInputRef.current) fileInputRef.current.value = ""
  }


  const onSubmit = async (values: FoodFormValues) => {
    await api.post("/foods/create", {
      name: values.name,
      price: Number(values.price),
      ingredients: values.ingredients,
      image: values.image,
      categoryIds: [values.categoryId],
    })

    form.reset()
    setUploadedImageUrl("")
    setOpen(false)
  }


  useEffect(() => {
    api.get("/categories").then((res) => setCategories(res.data))
  }, [])

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="">    
        <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger asChild>
        <button
          className="
            w-full h-[220px]
            border-2 border-dashed border-red-300
            rounded-xl
            flex flex-col items-center justify-center
            gap-3
            text-red-500
            hover:bg-red-50 transition
          "
        >
          <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">
            <Plus />
          </div>
          <p className="text-sm font-medium">
            Add new Dish to Appetizers
          </p>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[900px] rounded-2xl">
        <DialogHeader>
          <DialogTitle>Add new Dish</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-6 py-6"
          >

            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>Food image</FormLabel>
                  <FormControl>
                    <div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        id="file-upload"
                        onChange={handleFileUpload}
                      />

                      {uploadedImageUrl ? (
                        <div className="relative rounded-xl overflow-hidden border">
                          <Image
                            src={uploadedImageUrl}
                            alt="food"
                            width={500}
                            height={400}
                            className="h-[260px] w-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <label
                          htmlFor="file-upload"
                          className="
                            h-[260px]
                            border-2 border-dashed
                            rounded-xl
                            flex flex-col
                            items-center justify-center
                            cursor-pointer
                            text-muted-foreground
                          "
                        >
                          <Upload className="mb-2" />
                          Upload food image
                        </label>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Food name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="12.99" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c._id} value={c._id}>
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ingredients</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="min-h-[100px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isUploading}
                className="w-full bg-black text-white"
              >
                Add Dish
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog></div>
      <div className=""></div>
    </div>

  )
}
