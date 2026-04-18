"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Star } from "lucide-react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Booking",          id: "booking"},
        {
          name: "About",          id: "team"},
      ]}
      brandName="GENTLEMEN’S"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "radial-gradient"}}
      title="Mehr als ein Haarschnitt – Dein Style, Deine Persönlichkeit"
      description="Willkommen im GENTLEMEN’S Barbershop Lüneburg. Wir vereinen traditionelle Handwerkskunst mit modernem Style. Erlebe präzise Schnitte und erstklassige Bartpflege in entspannter Atmosphäre."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-fashionable-bearded-businessman-with-stylish-haircut-speaking-by-phone-drinks-glass-cool-juice-sitting-cafe-outdoors_613910-6697.jpg",          alt: "barber client portrait clean"},
        {
          src: "http://img.b2bpic.net/free-photo/european-brutal-man-with-beard-cut-barbershop_343596-4697.jpg",          alt: "barber client portrait clean"},
        {
          src: "http://img.b2bpic.net/free-photo/pleased-slavic-middle-aged-male-barber-uniform-holding-barber-tools-isolated-purple-wall_141793-91610.jpg",          alt: "barber client portrait clean"},
        {
          src: "http://img.b2bpic.net/free-photo/man-getting-his-beard-trimmed_23-2148256924.jpg",          alt: "barber client portrait clean"},
        {
          src: "http://img.b2bpic.net/free-photo/two-businessmen-talking-phone-city_1153-8203.jpg",          alt: "Two businessmen talking on the phone in the city"},
      ]}
      avatarText="Über 1.000 zufriedene Kunden"
      buttons={[
        {
          text: "Jetzt Termin buchen",          href: "#booking"},
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",          text: "Traditionelle Handwerkskunst"},
        {
          type: "text",          text: "Modernes Ambiente"},
        {
          type: "text",          text: "Präzise Haarschnitte"},
        {
          type: "text",          text: "Professionelle Bartpflege"},
        {
          type: "text",          text: "Exzellenter Service"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          title: "Herrenhaarschnitt",          subtitle: "Klassisch bis modern",          category: "Haare",          value: "25€"},
        {
          id: "f2",          title: "Skin Fade",          subtitle: "Exakte Übergänge",          category: "Haare",          value: "30€"},
        {
          id: "f3",          title: "Bartpflege",          subtitle: "Kontur & Pflege",          category: "Bart",          value: "15€"},
        {
          id: "f4",          title: "Komplettpaket",          subtitle: "Haar & Bart",          category: "Service",          value: "45€"},
      ]}
      title="Unsere Leistungen"
      description="Wir setzen auf Präzision, Hygiene und Individualität."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",          badge: "Basis",          price: "25€",          subtitle: "Klassischer Herrenhaarschnitt",          buttons: [
            {
              text: "Buchen",              href: "#booking"},
          ],
          features: [
            "Beratung",            "Waschen",            "Schnitt",            "Styling"],
        },
        {
          id: "p2",          badge: "Premium",          price: "35€",          subtitle: "Skin Fade mit Übergang",          buttons: [
            {
              text: "Buchen",              href: "#booking"},
          ],
          features: [
            "Skin Fade",            "Konturschnitt",            "Finish",            "Pflegeprodukt"],
        },
        {
          id: "p3",          badge: "Special (Most Popular)",          badgeIcon: Star,
          price: "50€",          subtitle: "Komplett Hair & Beard",          buttons: [
            {
              text: "Jetzt Buchen",              href: "#booking"},
          ],
          features: [
            "Herrenschnitt",            "Bart Trimmen",            "Heiße Kompresse",            "Aftershave"],
        },
      ]}
      title="Unsere Preise"
      description="Transparente Preise für höchste Qualität."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      members={[
        {
          id: "t1",          name: "Marco",          role: "Master Barber",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-razor-scissors-wooden-table_23-2147839842.jpg",          imageAlt: "barber professional portrait"},
        {
          id: "t2",          name: "David",          role: "Senior Barber",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-barber-shop-concept_23-2148506342.jpg",          imageAlt: "barber professional portrait"},
        {
          id: "t3",          name: "Stefan",          role: "Barber",          imageSrc: "http://img.b2bpic.net/free-photo/this-is-so-cute-portrait-attractive-unshaven-young-male-with-muscular-tattoo-body-crossing-arms-his-chest-smiling-being-touched-by-something-expressing-distrust-suspicion-doubt_343059-1710.jpg",          imageAlt: "barber professional portrait"},
        {
          id: "t4",          name: "Lukas",          role: "Junior Barber",          imageSrc: "http://img.b2bpic.net/free-photo/stylish-blond-bearded-male-with-crossed-arms-dressed-brown-leather-pilot-jacket_613910-11192.jpg",          imageAlt: "barber professional portrait"},
      ]}
      title="Das Barber-Team"
      description="Lerne unsere Experten kennen. Leidenschaft und Handwerk vereint."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Lukas M.",          role: "Stammkunde",          company: "Lüneburg",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/hairstylist-giving-haircut-client_23-2148506192.jpg"},
        {
          id: "2",          name: "Markus F.",          role: "Stammkunde",          company: "Lüneburg",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/joyful-young-handsome-barber-wearing-uniform-holding-hair-clippers-clenching-fist-isolated-purple_141793-84227.jpg"},
        {
          id: "3",          name: "Thomas K.",          role: "Stammkunde",          company: "Lüneburg",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-cuts-hair-barbershop_1157-16006.jpg"},
        {
          id: "4",          name: "Christian B.",          role: "Stammkunde",          company: "Lüneburg",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-bearded-man-barbershop-barber-work-washing-head_627829-7234.jpg"},
        {
          id: "5",          name: "Tim S.",          role: "Stammkunde",          company: "Lüneburg",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/barber-drying-hair-unrecognizable-man_23-2147778789.jpg"},
      ]}
      kpiItems={[
        {
          value: "4.9/5",          label: "Google Rating"},
        {
          value: "1.2k+",          label: "Happy Clients"},
        {
          value: "5+",          label: "Jahre Expertise"},
      ]}
      title="Kundenstimmen"
      description="Was unsere Kunden über uns sagen."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Reuzel",        "Uppercut",        "Layrite",        "Baxter",        "American Crew",        "Morgan's",        "Proraso"]}
      title="Unsere Marken"
      description="Wir vertrauen nur auf die besten Pflegeprodukte für dein Haar."
    />
  </div>

  <div id="booking" data-section="booking">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Termin"
      title="Jetzt Termin vereinbaren"
      description="Grapengießerstraße 26, 21335 Lüneburg. Ruf uns an oder komm vorbei."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="GENTLEMEN’S Barbershop"
      copyrightText="© 2025 GENTLEMEN’S Barbershop Lüneburg"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
