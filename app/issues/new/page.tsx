"use client";

import { Button, TextField, Box, Callout } from "@radix-ui/themes";
import SimpleMdeReact from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: String;
  description: String;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-4">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("./issues");
          } catch (error) {
            setError("An unexpected error occurred!");
          }
        })}
        className=" space-y-3">
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
    </div>
  );
};

export default NewIssuePage;
