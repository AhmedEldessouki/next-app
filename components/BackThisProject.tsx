/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { pledges } from "../data/pledges";
import Card from "./Card";
import CloseButton from "./CloseButton";
import ProjectCard from "./ProjectCard";

export default function BackThisProject({
  onCloseModel,
  onSuccess,
  error,
  data,
}: {
  onCloseModel: () => void;
  onSuccess: () => void;
  error: any;
  data: typeof pledges;
}) {
  const [isChecked, setChecked] = useState([false, false, false, false]);
  return (
    <>
      <div className="z-50 absolute -mt-20 ">
        <Card>
          <div className="max-w-xl">
            <div className="flex justify-between">
              <h1 className="font-commissioner text-2xl font-bold">
                Back this project
              </h1>
              <CloseButton handleClick={onCloseModel} />
            </div>
            <p className="font-commissioner text-sm font-normal text-gray-500 py-4 pb-6">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            <div className="flex flex-col gap-5">
              {data
                ? data.map(
                    (
                      {
                        id,
                        title,
                        body,
                        pledge,
                        availableSpots,
                      }: typeof pledges[0],
                      i
                    ) => (
                      <ProjectCard
                        key={id}
                        title={title}
                        pledge={pledge as number}
                        body={body}
                        isChecked={isChecked[i]}
                        onSelect={() => {
                          setChecked([]);
                          if (isChecked.find((item) => item === true)) {
                            const old = isChecked.indexOf(true);
                            isChecked.splice(old, 1, false);
                          }
                          isChecked.splice(i, 1, !isChecked[i]);
                          setChecked([...isChecked]);
                        }}
                        availableSpots={availableSpots}
                        handleClick={onSuccess}
                      />
                    )
                  )
                : error}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
