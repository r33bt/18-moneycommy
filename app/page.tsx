import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <main className="flex flex-col items-center justify-center text-center space-y-6 max-w-4xl mx-auto">
        {/* Coming Soon Badge */}
        <Badge variant="secondary" className="mb-4">
          🚀 Coming Soon
        </Badge>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Money.com.my
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
          Your trusted guide to personal finance in Malaysia. Practical advice, local insights, and tools to help Malaysians make smarter money decisions. Coming Q1 2026.
        </p>
      </main>
    </div>
  )
}
