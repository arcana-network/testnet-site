export const carousel = () => `
  <v-container>
    <v-carousel style="height: 10rem">
        <v-text>Slide 1</v-text>
        <v-heading :level="2">Slide 2</v-heading>
        <v-text :weight="600">Slide 3</v-text>
    </v-carousel>
  </v-container>
`

export default {
  title: 'VCarousel',
}
