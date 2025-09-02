
import { AppbarChart } from "@/src/components/AppbarChart";
import { AppAreaChart } from "@/src/components/AppAreaChart";
import AppPieChart from "@/src/components/AppPieChart";
import CardList from "@/src/components/CardList";
import TodoList from "@/src/components/TodoList";
import Image from "next/image";  

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 ">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2  " >
        <AppbarChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
        
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList/>
        </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>
      </div>
    </>
  )
}   
