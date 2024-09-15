import { FilteredTable } from '@/components/filtered-table'

export default function Home() {
  return (
      <main className="h-full w-full py-4 px-2 overflow-y-scroll flex justify-center">
        <FilteredTable/>
      </main>
  );
}
