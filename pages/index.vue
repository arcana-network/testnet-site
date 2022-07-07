<template>
  <div class="page">
    <TheHeader />
    <main>
      <HeroSection />
      <OverviewSection />
      <WhatsNewSection />
      <TestnetFeaturesSection />
      <GetStartedSection />
      <BuildSection />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="postcss" scoped>
@import url('../components/lib/media-query-helper.css');

.page {
  background: url('~assets/images/testnet-hero-bg.png') no-repeat;
  background-size: contain;
  background-position: top;

  @media (--viewport-small) {
    background: url('~assets/images/testnet-hero-bg-mobile.png') no-repeat;
    background-size: 100%;
  }
}

main {
  overflow-x: hidden;
}

main > * + *,
footer {
  margin-top: 10rem;

  @media (--viewport-medium) {
    margin-top: 6rem;
  }
}
</style>
