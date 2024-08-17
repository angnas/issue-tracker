"use client";

import { Button, TextField, Box } from "@radix-ui/themes";
import SimpleMdeReact from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: String;
  description: String;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("./issues");
      })}
      className="max-w-xl space-y-3">
      <Box maxWidth="600px">
        <TextField.Root placeholder="Title" {...register("title")} />
      </Box>
      <Controller
        name="Description"
        control={control}
        render={({ field }) => (
          <SimpleMdeReact placeholder="Description" {...field} />
        )}
      />

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
