"use client";

import React from "react";
import { TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div>
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
    </div>
  );
};

export default NewIssuePage;
