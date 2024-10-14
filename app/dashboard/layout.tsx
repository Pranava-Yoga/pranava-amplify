"use client";

import { PageWrapper } from '@/components/PageWrapper';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageWrapper isDashboard={true}>{children}</PageWrapper>;
}
