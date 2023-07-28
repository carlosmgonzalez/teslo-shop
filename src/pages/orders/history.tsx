import { ShopLayout } from '@/components/layouts/ShopLayout'
import Table from '@/components/tables.tsx/Table'
import React from 'react'

export default function history() {
  return (
    <ShopLayout title='Teslo | Order History' pageDescription='Order history'>
      <Table/>
    </ShopLayout>
  )
}
