"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Link from "next/link";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
];

const links = [
  {
    path: "/",
    label: "Overview",
  },
];

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="mt-5 flex items-center gap-x-5">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="rounded">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] px-10 py-5"
          >
            <Avatar className="w-6 h-6 mr-5 ">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Angel Cruz"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 rounded">
          <Command>
            <CommandInput placeholder="Search account" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {links.map((link) => (
        <Link href={link.path} className="font-semibold">
          {link.label}
        </Link>
      ))}
    </div>
  );
};
