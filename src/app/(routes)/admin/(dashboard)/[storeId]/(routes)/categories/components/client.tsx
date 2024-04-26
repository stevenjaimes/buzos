"use client";

import { Plus } from 'lucide-react';

import { useParams, useRouter } from 'next/navigation';

import { CategoryColumn, columns } from './columns';

import ApiList from '@/components/ui/api-list';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';

interface CategoryClientProps {
  data: CategoryColumn[]
}

export default function CategoryClient({ data }: CategoryClientProps) {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Categories (${data.length})`}
          description='Manage categories for your store'
        />
        <Button
          onClick={() => router.push(`/admin/${params.storeId}/categories/new`)}
        >
          <Plus className='h-4 w-4 mr-2' />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey='name' />
      <Heading
        title="API"
        description='API calls for categories'
      />
      <Separator />
      <ApiList
        entityName='categories'
        entityIdName='categoriesdId'
      />
    </>
  )
}
