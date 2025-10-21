'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Package, Zap, Shield, BarChart3 } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CTA = {
  badge: 'Revolutionary Warehouse Technology',
  mainTitle: 'Transform Your Warehouse with',
  mainTitleHighlight: 'Smart RFID Gun Integration',
  description:
    'Streamline inventory management with our advanced ERP system featuring cutting-edge RFID gun technology. Reduce errors by 95% and increase efficiency by 300%.',
  primaryCTA: 'Start Free Trial',
  primaryCTAHref: '/contact',
  secondaryCTA: 'Watch Demo',
  secondaryCTAHref: '/about',
  trustText: 'Trusted by leading warehouses and distribution centers',
  stat1Value: '95%',
  stat1Label: 'Error Reduction',
  stat2Value: '300%',
  stat2Label: 'Faster Scanning',
  stat3Value: '50K+',
  stat3Label: 'Items Tracked',
  stat4Value: '24/7',
  stat4Label: 'Real-time Updates',
  feature1Title: 'RFID Gun Ready',
  feature1Description: 'Seamless integration with handheld RFID scanners',
  feature2Title: 'Enterprise Security',
  feature2Description: 'Bank-grade encryption for all inventory data',
  feature3Title: 'Instant Setup',
  feature3Description: 'Deploy in hours, not weeks with guided configuration',
} as const;

type CTAProps = Partial<typeof DEFAULT_CTA>;

export default function Cta(props: CTAProps) {
  const config = { ...DEFAULT_CTA, ...props };
  const navigate = useSmartNavigation();

  const stats = [
    { value: config.stat1Value, label: config.stat1Label, icon: BarChart3 },
    { value: config.stat2Value, label: config.stat2Label, icon: Zap },
    { value: config.stat3Value, label: config.stat3Label, icon: Package },
    { value: config.stat4Value, label: config.stat4Label, icon: Shield },
  ];

  const features = [
    {
      title: config.feature1Title,
      description: config.feature1Description,
      icon: null,
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      iconColor: 'bg-orange-500',
    },
    {
      title: config.feature2Title,
      description: config.feature2Description,
      icon: Shield,
      bgColor: 'bg-amber-100 dark:bg-amber-900/20',
      iconColor: 'text-amber-600',
    },
    {
      title: config.feature3Title,
      description: config.feature3Description,
      icon: Zap,
      bgColor: 'bg-red-100 dark:bg-red-900/20',
      iconColor: 'text-red-500',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 size-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-primary/20 bg-background/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
                <Package className="size-4 mr-2" />
                <span data-editable="badge">{config.badge}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span data-editable="mainTitle">{config.mainTitle}</span>
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  size="lg"
                  className="group text-base px-8 py-4"
                  onClick={() => navigate(config.primaryCTAHref)}
                  data-editable-href="primaryCTAHref"
                  data-href={config.primaryCTAHref}
                >
                  <span data-editable="primaryCTA">{config.primaryCTA}</span>
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-4"
                  onClick={() => navigate(config.secondaryCTAHref)}
                  data-editable-href="secondaryCTAHref"
                  data-href={config.secondaryCTAHref}
                >
                  <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  <span data-editable="trustText">{config.trustText}</span>
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Company logos placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-24 bg-gradient-to-r from-muted to-muted/50 rounded opacity-50"
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        <span data-editable={`stat${index + 1}Value`}>{stat.value}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span data-editable={`stat${index + 1}Label`}>{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="space-y-2">
                  <div
                    className={`size-12 mx-auto rounded-full ${feature.bgColor} flex items-center justify-center mb-3`}
                  >
                    {Icon ? (
                      <Icon className={`size-6 ${feature.iconColor}`} />
                    ) : (
                      <div className={`size-6 rounded-full ${feature.iconColor}`} />
                    )}
                  </div>
                  <h3 className="font-semibold">
                    <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <span data-editable={`feature${index + 1}Description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
