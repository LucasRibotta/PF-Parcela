"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Pagination from "react-js-pagination";

type PaginationProps = {
  resPerPage: number
  productsCount: number
}

export default function CustomPagination({ resPerPage, productsCount }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  let page = searchParams.get("page") || 1;
  page = Number(page);

  let queryParams;

  const handlePageChange = (currentPage: any) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("page")) {
        queryParams.set("page", currentPage);
      } else {
        queryParams.append("page", currentPage);
      }

      const path = window.location.pathname + "?" + queryParams.toString();
      console.log("path", path);
      router.push(path);
    }
  };

  return (
    <div className="flex my-20 justify-center">
    <Pagination
      activePage={page}
      itemsCountPerPage={resPerPage}
      totalItemsCount={productsCount}
      onChange={handlePageChange}
      nextPageText={"Siguiente >"}
      prevPageText={"< Anterior"}
      firstPageText={"Inicio"}
      lastPageText={"Final"}
      itemClass="relative inline-flex items-center border-[1px] border-[#51a8a1] bg-transparent px-4 py-2 text-[#51a8a1] rounded hover:bg-[#51a8a1] hover:text-white ease-in-out duration-300 px-4 py-[6px] focus:z-20 mx-1"
      activeLinkClass="z-10 inline-flex items-center border-[1px] border-none bg-[#51a8a1] text-white focus:z-20 ease-in-out duration-300 px-2 py-[5px]"
      activeClass="z-10 inline-flex items-center border-[1px] border-[#51a8a1] bg-[#51a8a1] text-white focus:z-20"
    />
  </div>
  );
};