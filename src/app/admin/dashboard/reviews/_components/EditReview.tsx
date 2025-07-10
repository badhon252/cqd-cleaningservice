"use client";
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Image from "next/image";
import { X } from "lucide-react";

const MAX_FILE_SIZE = 20 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  author_name: z.string().min(2, {
    message: "Author Name must be at least 2 characters.",
  }),
  text: z.string().refine((val) => val.trim().split(/\s+/).length <= 25, {
    message: "Review text must not exceed 25 words",
  }),
  rating: z
    .number({
      required_error: "Rating is required",
      invalid_type_error: "Rating must be a number",
    })
    .min(1, "Minimum rating is 1")
    .max(20, "Maximum rating is 20"),
  image: z
    .any()
    .refine(
      (file) => !file || file?.size <= MAX_FILE_SIZE,
      `Max image size is 20MB.`
    )
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .optional(),
});

const EditReview = ({
  open,
  onOpenChange,
  reviewId,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reviewId?: string | null;
}) => {
  const session = useSession();
  const token = (session?.data?.user as { token?: string })?.token;
  const [previewImage, setPreviewImage] = useState<string | File | null>(null);
  const [imageError, setImageError] = useState(false);
  const queryClient = useQueryClient();

  console.log({ previewImage });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author_name: "",
      text: "",
      rating: 1,
      image: "",
    },
  });

  React.useEffect(() => {
    if (!reviewId) return;
    const fetchReviewDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-reviews/${reviewId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const review = await res.json();
        if (review?.data) {
          form.reset({
            author_name: review.data.author_name,
            text: review.data.text,
            rating: review.data.rating,
            // image: review.data.profile_photo_url,
          });
          console.log(review.data)
          if (review.data.profile_photo_url) {
            const imageUrl = review?.data?.profile_photo_url;
            setPreviewImage(imageUrl);
            setImageError(false);
          }
        }
      } catch (error: Error | unknown) {
        toast.error("Failed to load review data.");
        console.log(error);
      }
    };

    fetchReviewDetails();
  }, [reviewId, token, form]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setImageError(false);
      };
      reader.readAsDataURL(file);
      form.setValue("image", file);
    } else {
      setPreviewImage(null);
      form.setValue("image", undefined);
    }
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["review-update"],
    mutationFn: (formData: FormData) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-reviews/${reviewId}?_method=PUT`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data.message || "Update failed");
        return;
      }
      form.reset();
      setPreviewImage(null);
      toast.success(data.message || "Updated successfully!");
      onOpenChange(false);
      queryClient.invalidateQueries({ queryKey: ["all-review-data"] });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("author_name", values.author_name);
    formData.append("text", values.text);
    formData.append("rating", values.rating.toString());

    if (values.image) {
      formData.append("image", values.image);
    } else if (
      previewImage &&
      typeof previewImage === "string" &&
      previewImage.startsWith("http")
    ) {
      formData.append("existingImage", previewImage);
    }

    mutate(formData);
  }

  return (
    <div>
      <div>
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                encType="multipart/form-data"
              >
                <h2 className="text-2xl font-bold text-[#0F2A5C] text-center">
                  Review content
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="md:col-span-1">
                    <FormField
                      control={form.control}
                      name="author_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold text-[#0F2A5C]">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="md:col-span-1">
                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-bold text-[#0F2A5C]">Rating (1 to 5)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={1}
                              max={5}
                              placeholder="Enter a rating"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => {
                      const wordCount =
                        field.value?.trim().split(/\s+/).length || 0;
                      return (
                        <FormItem>
                          <FormLabel className="text-base font-bold text-[#0F2A5C]">
                            Review Content
                          </FormLabel>
                          <FormControl>
                            <div>
                              <Textarea
                                placeholder="Enter a review content"
                                {...field}
                                onChange={(e) => {
                                  const words = e.target.value
                                    .trim()
                                    .split(/\s+/);
                                  if (words.length <= 25) {
                                    field.onChange(e);
                                  }
                                }}
                              />
                              <p className="text-sm text-gray-500 mt-1">
                                {wordCount}/25 words
                              </p>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="image"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-base font-bold text-[#0F2A5C]">
                          Change profile image
                        </FormLabel>
                        <FormControl>
                          <div className="space-y-4">
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                            {previewImage && !imageError && typeof previewImage === "string" && (
                              <div className="relative mt-2">
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 mx-auto">
                                  <Image
                                    src={previewImage}
                                    alt="Preview"
                                    fill
                                    className="object-cover"
                                    unoptimized={true}
                                    onError={() => setImageError(true)}
                                  />
                                  <button
                                    type="button"
                                    className="absolute top-4 right-6 bg-white rounded-full p-1 shadow-sm hover:bg-gray-100 transition-colors"
                                    onClick={() => {
                                      setPreviewImage(null);
                                      form.setValue("image", undefined);
                                      setImageError(false);
                                    }}
                                  >
                                    <X className="w-4 h-4 text-gray-600" />
                                  </button>
                                </div>
                              </div>
                            )}
                            {imageError && (
                              <p className="text-red-500 text-sm">
                                Failed to load image
                              </p>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-lg font-bold px-10 py-2"
                    type="submit"
                    disabled={isPending}
                  >
                    {isPending ? "Updating..." : "Update"}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EditReview;
