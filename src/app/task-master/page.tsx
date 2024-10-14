import ProtectedRoute from '@/components/ProtectedRoute';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Task Master',
  ...NO_INDEX_PAGE,
};

export default function TaskMasterPage() {
  return (
    <ProtectedRoute>
      <div>TaskMaster</div>
    </ProtectedRoute>
  );
}
