"use client"

import { usePathname, useRouter } from "next/navigation"
import { Breadcrumbs, Button, CssBaseline, Link, Typography } from "@mui/material"
import { useState, useEffect } from "react"

import { ROUTE_NAMES } from "../RouteNames"

type RouteNameKeys = keyof typeof ROUTE_NAMES;

export default function BreadCrumbs() {
  const router = useRouter()
  const pathname = usePathname()
  const [crumbs, setCrumbs] = useState<string[]>([])

  useEffect(() => {
    setCrumbs(pathname.split("/"))
  }, [pathname])

  return (
    <CssBaseline>
      <div className="flex flex-row pl-1 text-black items-center">
        <Button size="small" onClick={ () => router.back() }>
          ←
        </Button>
        <Breadcrumbs className="pl-1" aria-label="breadcrumb">
          {
            pathname.split("/").map((path, idx) => {
              const temp = crumbs.slice(0, idx + 1)
              return (
                <Link 
                  key={path}
                  underline="hover"
                  href={temp.join("/")}
                  color={idx === crumbs.length - 1 ? "text.primary" : "inherit" }
                >
                  {ROUTE_NAMES[path as RouteNameKeys]}
                </Link>
              )
            })
          }
        </Breadcrumbs>
      </div>
    </CssBaseline>
  )
}