import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCardSales() {
  return (
    <Card>
      <Skeleton className="h-[7.9rem]" />
    </Card>
  );
}
