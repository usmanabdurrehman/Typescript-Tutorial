// Type generics / HTML types

const getData = (payload: unknown) => {
  if (Array.isArray(payload) && payload.length > 10) {
  }
};

import React, { useRef } from "react";

interface BaseRecord {
  id: number;
}

const findById = <T extends BaseRecord>(
  items: T[],
  id: number
): T | undefined => {
  return items.find((item) => item.id === id);
};

type ExampleRecord = { id: number; name: string };

findById<ExampleRecord>([{ id: 1, name: "Alex" }], 1);

const Form = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const ref = useRef<HTMLFormElement>(null);

  const getFormHeight = () => {
    const rect = ref.current?.getBoundingClientRect();
  };

  return <form onSubmit={onSubmit} ref={ref}></form>;
};
