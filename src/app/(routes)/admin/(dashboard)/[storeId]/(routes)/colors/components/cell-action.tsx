"use client";

import { useState } from "react";

import axios from "axios";

import { toast } from "sonner";

import { useParams, useRouter } from "next/navigation";

import { ColorColumn } from "./columns";

import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";

import AlertModal from "@/components/modals/alert-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";

interface CellActionProps {
  data: ColorColumn
}

export default function CellAction({ data }: CellActionProps) {
  const router = useRouter();
  const params = useParams();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Color id to the clipboard.");
  }

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/admin/api/${params.storeId}/colors/${data.id}`);
      router.refresh();
      toast.success('Color deleted.');
    } catch (error: any) {
      console.log(error.message)
      toast.error('Make sure you removed all products using this color first.');
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open Menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`colors/${data.id}`)}>
            <Edit className="mr-2 h-4 w-4" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4 " />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertModal
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
      />
    </>
  )
}
