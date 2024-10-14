"use client";

import { PageWrapper } from '@/components/PageWrapper';

interface PageWrapperProps {
  children: React.ReactNode;
  isDashboard?: boolean;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageWrapper>{children}</PageWrapper>;
}
