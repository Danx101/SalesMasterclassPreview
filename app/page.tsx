import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedIcon from '@/components/AnimatedIcon';
import AnimatedCounter from '@/components/AnimatedCounter';
import AnimatedCheckmark from '@/components/AnimatedCheckmark';
import LightRaysBackground from '@/components/LightRaysBackground';
import Navigation from '@/components/Navigation';
import EnhancedButton from '@/components/EnhancedButton';
import InfiniteScroll from '@/components/InfiniteScroll';
import CircularGallery from '@/components/CircularGallery';
import AnimatedStats from '@/components/AnimatedStats';
import LightRays from '@/components/LightRays';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
      {/* Hero Section - Dark Background with Interactive Animation */}
      <section className="relative bg-black text-white py-16 md:py-20 lg:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-0"></div>
        <LightRaysBackground />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center">
            {/* Light Rays Animation - Above the text */}
            <div className="relative w-full h-[300px] md:h-[400px] mb-8 md:mb-12">
              <LightRays
                raysOrigin="top-center"
                raysColor="#DC2626"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
              />
            </div>

            <AnimatedSection>
              <div className="text-center max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  Meistere die Kunst des{' '}
                  <span className="text-primary">Verkaufens</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
                  Lerne von Chris Steiner die bewährten Strategien und Techniken,
                  die deine Sales-Performance auf das nächste Level bringen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <EnhancedButton variant="primary" size="lg" className="w-full sm:w-auto">
                    Jetzt durchstarten
                  </EnhancedButton>
                  <EnhancedButton variant="outline" size="lg" className="w-full sm:w-auto">
                    Mehr erfahren
                  </EnhancedButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                Sieh dir an, was dich erwartet
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Ein Blick in den Kurs
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="/images/img2.png"
              >
                <source src="/videos/page-video.mp4" type="video/mp4" />
                Dein Browser unterstützt das Video-Tag nicht.
              </video>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Infinite Scroll Section - Course Modules */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                Kurs-Module
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Entdecke die Themen des Sales-Kurses
              </p>
            </div>
          </AnimatedSection>
        </div>
        <InfiniteScroll />
      </section>

      {/* Stats Section - Animated Metrics */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Messbare Erfolge
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Zahlen, die für sich sprechen
              </p>
            </div>
          </AnimatedSection>
          <AnimatedStats />
        </div>
      </section>

      {/* Features Section - Light Background */}
      <section id="features" className="relative py-12 md:py-16 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Was du im Kurs lernst
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Praxiserprobte Methoden für nachhaltigen Verkaufserfolg
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <AnimatedIcon delay={0.2}>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </AnimatedIcon>
                  <CardTitle className="text-xl sm:text-2xl">Verkaufstechniken</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600">
                    Effektive Strategien für Erstgespräche, Einwandbehandlung und
                    erfolgreichen Abschluss.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <AnimatedIcon delay={0.3}>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </AnimatedIcon>
                  <CardTitle className="text-xl sm:text-2xl">Mindset & Psychologie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600">
                    Entwickle das richtige Sales-Mindset und verstehe die Psychologie
                    deiner Kunden.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-lg sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <AnimatedIcon delay={0.4}>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                  </AnimatedIcon>
                  <CardTitle className="text-xl sm:text-2xl">Praxis & Umsetzung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600">
                    Konkrete Frameworks und Templates, die du sofort in deinem
                    Verkaufsalltag anwenden kannst.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Circular Gallery */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                Was unsere Teilnehmer sagen
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Echte Erfolgsgeschichten von Sales-Profis
              </p>
            </div>
          </AnimatedSection>
          <CircularGallery />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Wähle deinen Plan</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Investiere in deine Sales-Karriere
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Starter Plan */}
            <Card className="flex flex-col border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">Starter</CardTitle>
                <CardDescription className="text-sm sm:text-base">Perfekt für Einsteiger</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    €<AnimatedCounter from={0} to={299} duration={1.5} />
                  </span>
                  <span className="text-gray-600 ml-2">/ einmalig</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.2} />
                    Zugang zu Grundlagen-Modulen
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.3} />
                    Community-Zugang
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.4} />
                    E-Mail Support
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.5} />
                    Lifetime Updates
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="lg" className="w-full text-base sm:text-lg">
                  Jetzt starten
                </Button>
              </CardFooter>
            </Card>

            {/* Professional Plan - Highlighted */}
            <Card className="flex flex-col border-2 border-primary shadow-2xl scale-100 md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  BELIEBT
                </span>
              </div>
              <CardHeader className="bg-black text-white rounded-t-lg">
                <CardTitle className="text-2xl sm:text-3xl">Professional</CardTitle>
                <CardDescription className="text-gray-300 text-sm sm:text-base">Für ambitionierte Verkäufer</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    €<AnimatedCounter from={0} to={599} duration={1.8} />
                  </span>
                  <span className="text-gray-600 ml-2">/ einmalig</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.2} />
                    Alle Starter Features
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.3} />
                    Erweiterte Module & Masterclasses
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.4} />
                    Wöchentliche Q&A Sessions
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.5} />
                    1:1 Coaching Session
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.6} />
                    Exklusive Sales Templates
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.7} />
                    Prioritäts-Support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full text-base sm:text-lg">
                  Jetzt starten
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl">Enterprise</CardTitle>
                <CardDescription className="text-sm sm:text-base">Für Sales-Profis & Teams</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    €<AnimatedCounter from={0} to={999} duration={2} />
                  </span>
                  <span className="text-gray-600 ml-2">/ einmalig</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.2} />
                    Alle Professional Features
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.3} />
                    Unbegrenzte 1:1 Coaching Sessions
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.4} />
                    Individuelle Team-Workshops
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.5} />
                    Persönliche Betreuung
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <AnimatedCheckmark delay={0.6} />
                    VIP Community
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="lg" className="w-full text-base sm:text-lg">
                  Jetzt starten
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Alles, was du wissen musst
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary">
                Wie lange habe ich Zugang zum Kurs?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Du erhältst lebenslangen Zugang zu allen Kursinhalten und allen zukünftigen Updates. Einmal kaufen, für immer lernen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary">
                Ist der Kurs für Anfänger geeignet?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Ja, absolut! Der Kurs ist so aufgebaut, dass sowohl Einsteiger als auch erfahrene Verkäufer profitieren. Wir starten mit den Grundlagen und gehen dann in fortgeschrittene Techniken über.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary">
                Gibt es eine Geld-zurück-Garantie?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Ja, wir bieten eine 30-Tage-Geld-zurück-Garantie. Wenn du nicht zufrieden bist, erhältst du dein Geld ohne Wenn und Aber zurück.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary">
                Wie viel Zeit muss ich investieren?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Der Kurs ist flexibel gestaltet. Du kannst in deinem eigenen Tempo lernen. Die meisten Teilnehmer verbringen 2-3 Stunden pro Woche und schließen den Kurs in 8-12 Wochen ab.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary">
                Bekomme ich ein Zertifikat?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600">
                Ja, nach erfolgreichem Abschluss erhältst du ein Zertifikat, das du in deinem LinkedIn-Profil oder Lebenslauf verwenden kannst.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2024 Chris Steiner Sales Kurs. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
      </main>
    </>
  );
}
