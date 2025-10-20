"use client";

import { useEffect, useState } from "react";
import { getComments } from "../lib/api";
import { ChevronDown } from "lucide-react";
import PaginationExample from "../ui/paginationExample/pagination-example";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
interface FullText {
  id: number;
  isOpen: boolean;
}

export default function Home() {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [page, setPage] = useState(1);
  const [fullText, setFullText] = useState<FullText>({
    id: 0,
    isOpen: false,
  });
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getComments(limit, page);
      console.log(data);
      if (data) {
        setComments(data);
      } else setComments(null);
    };
    fetchData();
  }, [page]);

  const handlePageChange = (num: number) => {
    setPage(num);
  };

  return (
    <div className="font-sans container mx-auto items-center justify-center flex mt-10 flex-col">
      <h1 className="text-4xl my-10">Pagination example with server quering</h1>
      <div className="">
        <ul className="flex max-w-[500px] gap-4 flex-col">
          {comments?.map((comment) => {
            return (
              <li
                key={comment.id}
                className="flex flex-col"
              >
                <div
                  className="cursor-pointer flex flex-row gap-4 justify-between"
                  onClick={() => {
                    setFullText({ id: comment.id, isOpen: !fullText.isOpen });
                  }}
                >
                  <h2>{comment.name}</h2>
                  <ChevronDown
                    className=" cursor-pointer"
                    width={30}
                    height={30}
                  />
                </div>

                {fullText.id === comment.id && fullText.isOpen === true && (
                  <p>{comment.body}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <PaginationExample
        currentPage={page}
        onPageChange={handlePageChange}
        totalPages={10}
      />
    </div>
  );
}
