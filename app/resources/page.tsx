import { FilteredTable } from '@/components/filtered-table'

export default function Home() {
  return (
      <main className="h-full w-full pt-16 px-2 overflow-y-auto flex justify-center">
        <FilteredTable/>
      </main>
  );
}
