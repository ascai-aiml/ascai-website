"use client"

import { useEffect } from "react"
import TeamReel from "@/components/team-reel"

import TeamGroupsShowcase from "@/components/team-groups-showcase"

export default function TeamsPage() {
  // Hide any global footer on this route only
  useEffect(() => {
    const style = document.createElement("style")
    style.setAttribute("data-hide-footer", "true")
    style.innerHTML = "footer{display:none !important}"
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Prevent scroll on this page
    // Removed scroll lock to allow scrolling on the Teams page

    return (
      <>
        <TeamReel />
        <TeamGroupsShowcase />
      </>
    )
}