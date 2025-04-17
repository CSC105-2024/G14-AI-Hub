import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { RxCross2 } from "react-icons/rx";

const AlertBox = ({ btnName, css, title, onClick }) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button
            className={`bg-[var(--primary-color)] hover:bg-violet-900 ${css}`}
          >
            {btnName}
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <div>
            <div className="flex justify-end">
              <AlertDialogCancel
                className={
                  "border-none shadow-none focus:ring-0 focus:outline-none p-0 m-0"
                }
              >
                <RxCross2 />
              </AlertDialogCancel>
            </div>
            <AlertDialogHeader>
              <AlertDialogTitle>{title}</AlertDialogTitle>
            </AlertDialogHeader>
          </div>
          <AlertDialogFooter>
            <div className="flex justify-around">
              <AlertDialogCancel className={"w-30"}>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className={
                  "w-30 text-white bg-[var(--primary-color)]  hover:bg-violet-900"
                }
                onClick={onClick}
              >
                Yes
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertBox;
