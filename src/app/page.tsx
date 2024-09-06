"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// This is the light theme object that contains the theme variables for the light theme
const lightTheme = {
  "--background": "0 0% 100%",
  "--foreground": "240 10% 3.9%",
  "--card": "0 0% 100%",
  "--card-foreground": "240 10% 3.9%",
  "--popover": "0 0% 100%",
  "--popover-foreground": "240 10% 3.9%",
  "--primary": "240 5.9% 10%",
  "--primary-foreground": "0 0% 98%",
  "--secondary": "240 4.8% 95.9%",
  "--secondary-foreground": "240 5.9% 10%",
  "--muted": "240 4.8% 95.9%",
  "--muted-foreground": "240 3.8% 46.1%",
  "--accent": "240 4.8% 95.9%",
  "--accent-foreground": "240 5.9% 10%",
  "--destructive": "0 84.2% 60.2%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "240 5.9% 90%",
  "--input": "240 5.9% 90%",
  "--ring": "240 10% 3.9%",
  "--radius": "0.5rem",
};

// This is the dark theme object that contains the theme variables for the dark theme
const darkTheme = {
  "--background": "240 10% 3.9%",
  "--foreground": "0 0% 98%",
  "--card": "240 10% 3.9%",
  "--card-foreground": "0 0% 98%",
  "--popover": "240 10% 3.9%",
  "--popover-foreground": "0 0% 98%",
  "--primary": "0 0% 98%",
  "--primary-foreground": "240 5.9% 10%",
  "--secondary": "240 3.7% 15.9%",
  "--secondary-foreground": "0 0% 98%",
  "--muted": "240 3.7% 15.9%",
  "--muted-foreground": "240 5% 64.9%",
  "--accent": "240 3.7% 15.9%",
  "--accent-foreground": "0 0% 98%",
  "--destructive": "0 62.8% 30.6%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "240 3.7% 15.9%",
  "--input": "240 3.7% 15.9%",
  "--ring": "240 4.9% 83.9%",
  "--radius": "0.5rem",
};

// This is the main component that renders the showcase of components
export default function Component() {
  // This sets the theme state to light
  const [theme, setTheme] = useState("light");

  // This effect updates the theme variables in the document based on the current
  // theme state.
  // useEffect is a hook that runs when the component is mounted and when the
  // theme state changes.
  useEffect(() => {
    const root = document.documentElement;
    const themeVars = theme === "light" ? lightTheme : darkTheme;
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    // This is the main container for the component showcase
    <div className="container mx-auto p-4">
      {/* This is the title of the component showcase */}
      <h1 className="text-3xl font-bold mb-4 text-primary">
        shadcn Component Showcase
      </h1>
      {/* This is the button to toggle the theme */}
      <div className="mb-4">
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </Button>
      </div>
      {/* This is the grid that contains the components */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* This is the card for the button showcase */}
        <Card>
          {/* This is the header of the card */}
          <CardHeader>
            {/* This is the title of the card */}
            <CardTitle>Button Showcase</CardTitle>
            <CardDescription>Various button styles</CardDescription>
          </CardHeader>
          {/* This is the content of the card */}
          <CardContent className="space-y-2">
            {/* This is the button for the default button showcase */}
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </CardContent>
        </Card>

        {/* This is the card for the input and label showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Input and Label</CardTitle>
            <CardDescription>Text input with label</CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" />
          </CardContent>
        </Card>

        {/* This is the card for the tabs showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Tabbed interface</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Content for Tab 1</TabsContent>
              <TabsContent value="tab2">Content for Tab 2</TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* This is the card for the checkbox showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Checkbox</CardTitle>
            <CardDescription>Selectable checkbox</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </CardContent>
        </Card>

        {/* This is the card for the radio group showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Radio Group</CardTitle>
            <CardDescription>Select one option</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="option1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="option1" />
                <Label htmlFor="option1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="option2" />
                <Label htmlFor="option2">Option 2</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* This is the card for the select showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Select</CardTitle>
            <CardDescription>Dropdown selection</CardDescription>
          </CardHeader>
          <CardContent>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* This is the card for the slider showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Slider</CardTitle>
            <CardDescription>Adjustable range input</CardDescription>
          </CardHeader>
          <CardContent>
            <Slider defaultValue={[50]} max={100} step={1} />
          </CardContent>
        </Card>

        {/* This is the card for the switch showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Switch</CardTitle>
            <CardDescription>Toggle switch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </CardContent>
        </Card>

        {/* This is the card for the toggle showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle</CardTitle>
            <CardDescription>Pressable toggle</CardDescription>
          </CardHeader>
          <CardContent>
            <Toggle>Toggle me</Toggle>
          </CardContent>
        </Card>

        {/* This is the card for the tooltip showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Tooltip</CardTitle>
            <CardDescription>Hover for more info</CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
