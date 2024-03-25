import {Card, Skeleton} from "@nextui-org/react";

export const ItemSkeleton = () => {
    return (
<section className="flex justify-center">
<Card className="w-[425px] h-[695px] space-y-5 shadow-lg shadow-indigo-700 py-3 px-3">
    <div className="h-[100px] space-y-3" >
    <Skeleton className="w-4/5 rounded-lg my-2">
                  <div className="h-7 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg my-2">  
                  <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
    </div>
    <Skeleton className= "rounded-lg">
            <div className= "w-[390px] h-[405px] rounded-lg bg-default-300"></div>
    </Skeleton>
    <div className="h-[190px]space-y-4">
        <Skeleton className="w-3/5 rounded-lg py-2">
                  <div className="h-4 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg my-2">
                  <div className="h-7 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg py-2">  
                  <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
    </div>
</Card>
</section>
    )
};  