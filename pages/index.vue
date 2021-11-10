<template>
  <div class="page">
    <TheHeader />
    <main>
      <HeroSection />
      <OverviewSection />
      <BuildSection />
      <BugBountySection />
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
  margin-top: 6rem;

  @media (--viewport-medium) {
    margin-top: 4rem;
  }

  @media (--viewport-small) {
    margin-top: 2rem;
  }
}
</style>
