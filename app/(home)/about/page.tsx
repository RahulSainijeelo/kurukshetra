import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/homepage/Footer';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, Quote, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Kurukshetra - Take You to the Reality",
  description:
    "Learn about Kurukshetra's mission to restore truth and dharma in modern discourse. Facts speak, lies lie on the ground. Join our civilizational movement.",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-red-50/30">
      <Header />
      
      <main className="container mx-auto !px-4 !py-3">
        {/* Hero Title */}
        <div className="text-center px-5 mb-4">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4 relative z-10 p-5">
              कुरुक्षेत्र
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 blur-3xl opacity-30 -z-10 scale-150"></div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4"></div>
        </div>

        {/* Sanskrit Verses - Enhanced */}
        <div className="text-center mb-16">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-orange-200/50 overflow-hidden max-w-5xl mx-auto">
            {/* Decorative header */}
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 p-1">
              <div className="bg-white rounded-t-xl px-8 py-6">
                <Quote className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Sacred Verses from the Gita</h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium space-y-3 mb-8">
                  <p className="mb-2">"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।</p>
                  <p className="mb-2">अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्‌ ॥</p>
                  <p className="mb-2">परित्राणाय साधूनां विनाशाय च दुष्कृताम्‌ ।</p>
                  <p>धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥"</p>
                </div>
              </div>
              
              <div className="border-t-2 border-gradient-to-r from-orange-200 to-red-200 pt-8">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200/50">
                  <p className="text-gray-800 italic text-lg md:text-xl leading-relaxed">
                    "Whenever Dharma starts fading into oblivion and Adharma increases, I manifest myself (the formless assumes form – an avataar of the Supreme takes birth).
                    I take birth in every age to protect the virtuous, to annihilate the evil-doers and to establish (and re-establish) Dharma."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Enhanced Typography */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* First paragraph - Featured */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 md:p-12">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light first-letter:text-6xl first-letter:font-bold first-letter:text-orange-600 first-letter:float-left first-letter:mr-3 first-letter:mt-2">
              The contemporary epoch is characterized by a pervasive erosion of ethical norms, where malevolent forces—conceptualized here through the Indic figures of adharma and the malechha—transcend parochial divisions of identity. In this climate, truth is systematically suppressed, and archetypes of tyranny, akin to the Kalyugi Ravana and Kamsa, proliferate. Consequently, the current trajectory of human history appears increasingly chaotic. The principles of truth and justice have been subordinated, marginalized by systemic injustice and unrighteousness. Innocence and veracity are now frequently disdained, eclipsed by a prevailing culture that valorizes cunning and animosity as emergent social virtues. This phenomenon suggests a convergence of destructive tendencies, as if the archetypal asuras of every age are manifesting concurrently, threatening to dismantle the foundational virtues and ethics of human civilization.
            </p>
          </div>

          {/* Second paragraph */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              The ascendancy of these asuric forces—who often operate under the guise of certain intellectual frameworks, including far-left and Marxist ideologies that are fundamentally oppositional to traditional social and national structures—has established a new literary hegemony. This paradigm shift has precipitated the marginalization of virtuous social norms, veracity, indigenous Indic narratives, and nationalistic sentiment, as these are progressively supplanted by fabricated myths and historical distortions. A systematic campaign inculcates within the citizens of a once-glorious civilization a pervasive sense of self-loathing, an aversion for their own illustrious past, and a particular animus towards all elements categorized as "Hindu." Within this discursive landscape, manufactured falsehoods are promulgated as incontrovertible truths. This phenomenon extends beyond the established mainstream literary intelligentsia; the proliferation of countless entities, analogous to the mythological Raktabija—whose propagation seems inexorable—poses an existential threat to the nation's unity, its rootedness in a glorious antiquity, and its collective honor.
            </p>
          </div>

          {/* Third paragraph */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              In the face of this formidable ideological colonization, the emergence of a robust, intellectually rigorous counter-narrative is not merely an option but a civilizational imperative. It is precisely within this vacuum of authentic representation that this platform, KURUKSHETRA, situates its purpose. We position ourselves as a vanguard in the reclamation of the Indic intellectual sphere, committed to being a forerunner of narratives grounded in the profound wisdom of Bharat's ancient traditions. Our mission is to mount a formidable and scholarly opposition to the established literary hegemony, which has long monopolized discourse with a framework often alien to the indigenous consciousness. We stand, unequivocally, as flagbearers of Dharma—not merely as religious identity, but as the eternal principle of cosmic order, righteousness, and ethical duty—and of a enlightened nationalism that draws its vitality from a deep, unapologetic rootedness in this sacred geography.
            </p>
          </div>

          {/* Inspiration Section - Enhanced */}
          <div className="bg-white rounded-2xl shadow-2xl border border-orange-200/50 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-orange-300 to-red-300 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image 
                          className="object-cover w-full h-full" 
                          src="https://i.ibb.co/zWRRjQXX/099ebea2-575c-43fe-a921-47cf3c4eb2be.jpg" 
                          width={250} 
                          height={250} 
                          alt="Shri Rajiv Dixit"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        श्री राजीव दीक्षित
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-orange-600 mb-6 text-center lg:text-left">Our Inspiration</h3>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200/50">
                <p className="text-lg leading-relaxed text-gray-700 font-light">
                  The foundational ethos of this initiative is a profound debt to the legacy of the late Shri Rajiv Dixit. His life's work stands as the ultimate source of inspiration and the intellectual bedrock upon which our resolve is built. A visionary orator and a meticulous researcher, Shri Rajiv Dixit dedicated his existence to the awakening of the Bharatiya spirit, arming the common citizen with irrefutable facts, historical evidence, and a powerful critique of systemic biases. It was through his seminal lectures that the architecture of our understanding was first formed. His unwavering commitment to uncovering the truths of Bharat's history, its scientific heritage, and its economic subjugation provided the very lens through which we analyze the contemporary crisis. This website is, in many ways, a continuation of his unfinished revolution—an endeavor to translate his oral legacy into an enduring literary and scholarly movement.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth paragraph */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              Our commitment extends beyond mere reaction. We endeavor to be a fountainhead of original research, insightful analysis, and articulate discourse that re-centers the Indic paradigm. Each article, essay, and critique published here will be guided by the twin lights of intellectual integrity and civilizational devotion. We will systematically deconstruct the prevailing distortions while simultaneously reconstructing a proud and accurate narrative of our past, a clear-eyed assessment of our present, and a visionary roadmap for our future. We invite every seeker of truth, every patriot, and every individual who feels the stirring of their ancestral memory to join us in this critical endeavor. Together, we shall endeavor to restore the voice of Dharma and rekindle the intellectual sovereignty of Bharat.
            </p>
          </div>

          {/* Call to Action - Enhanced */}
          <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 rounded-2xl overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/10 to-transparent rounded-full translate-x-48 translate-y-48"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <p className="text-white text-lg md:text-xl leading-relaxed font-light mb-6">
                  The conch shell of Kurukshetra is sounded once more, not on a field of earthly combat, but on the intellectual and spiritual battlefield of our age. This platform is that sacred ground where the civilizational war for the soul of Bharat must be waged and won. We do not merely invite you to read; we call upon every true Bharatiya to take up their rightful place in this dharma-yuddha. In this struggle, you are both Arjuna, the warrior grappling with doubt and confronting a formidable adversary of distorted narratives, and BhagwanSri Krishna, the divine charioteer imparting the timeless wisdom of the Gita—the clarion call of truth and duty.
                </p>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                    <p className="text-white font-bold text-xl md:text-2xl leading-relaxed">
                      Let us,rise together. Shed the paralysis of confusion, arm yourselves with the weapon of discernment, and resolve to fight not for conquest, but for reclamation. Join us at Kurukshetra. Your civilization calls! Bharat Mata calls! Bharatiyata calls!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Section - Enhanced */}
        <div className="mt-16 bg-white rounded-2xl shadow-2xl border border-orange-200/50 overflow-hidden max-w-5xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-1">
            <div className="bg-white rounded-t-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Connect With Us</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-3"></div>
                  Follow Our Mission
                </h3>
                <div className="space-y-6">
                  <Link href="https://www.facebook.com/share/15x8YKAjA5/" className="group flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium">Facebook - Daily Updates & Discussions</span>
                    </div>
                  </Link>
                  <Link href="https://x.com/KURUKSHETRA108?t=-cOx8DWUZF3Oab9z5HNv2g&s=08" className="group flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Twitter className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium">Twitter - Breaking News & Analysis</span>
                    </div>
                  </Link>
                  <Link href="https://www.instagram.com/kurukshetra108?igsh=MTIxNGtrbGJmaHhkbA==" className="group flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium">Instagram - Visual Stories & Culture</span>
                    </div>
                  </Link>
                  <Link href="https://youtube.com/@kuruksetra?si=Zsc_6dA1w_6wnwbB" className="group flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Youtube className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium">YouTube - In-depth Documentaries</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-3"></div>
                  Get In Touch
                </h3>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Editorial Team</p>
                      <p className="text-orange-700 font-medium">kurukshetra5751@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;