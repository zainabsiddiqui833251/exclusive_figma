import Banner from "@/components/banner";
import Category from "@/components/category";
import Flashsales from "@/components/flashsales";
import Header from "@/components/header";
import Newarrival from "@/components/newarrival";
import Ourproducts from "@/components/ourproducts";
import Services from "@/components/services";
import Thismonth from "@/components/thismonth";
export default function Home() {
  return (
    <>
      <Header />
      <Flashsales/>
      <Category/>
      <Thismonth/>
      <Banner/>
      <Ourproducts/>
      <Newarrival/>
      <Services/>
    </>
  );
}
