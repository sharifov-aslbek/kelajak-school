<template>
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 my-24">
          <div v-motion-slide-visible-bottom v-for="person in people" :key="person.id" class="relative rounded-2xl overflow-hidden shadow-lg">
            <!-- Video element that autoplays -->
            <video 
              class="w-full h-[400px] object-cover"
              :src="person.videoUrl"
              autoplay
              loop
              muted
              playsinline
            ></video>
            
            <!-- Name overlay -->
            <div class="absolute bottom-4 left-4">
              <div class="bg-white rounded-full px-4 py-2 shadow-md">
                <span class="font-medium text-gray-800">{{ person.name }}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Sample data structure
  interface Person {
    id: number;
    name: string;
    videoUrl: string;
  }
  
  const people: Person[] = [
    {
      id: 1,
      name: 'English',
      videoUrl: '/vd.MP4', // Replace with actual video URL
    },
    {
      id: 2,
      name: 'Football',
      videoUrl: '/vd2.MP4', // Replace with actual video URL
    },
    {
      id: 3,
      name: 'Zakovat',
      videoUrl: '/vd3.mp4', // Replace with actual video URL
    },
    {
      id: 4,
      name: 'Matematika',
      videoUrl: '/vd4.mp4'
    },
    {
      id: 5,
      name: 'Darsdan lavhalar',
      videoUrl: '/vd5.mp4'
    },
    {
      id: 6,
      name: 'Speaking',
      videoUrl: '/vd6.mp4'
    },
    {
      id: 7 ,
      name: 'Alisher Navoiy tavvaludi uchun Bayram tadbirlar',
      videoUrl: '/vd7.mp4'
    },
    {
      id: 8,
      name: "Zavqli o'yinlar",
      videoUrl: '/vd8.MOV'
    },
    {
      id: 9,
      name: "Ingliz tili",
      videoUrl: '/vd9.mp4'
    },
    {
      id: 10,
      name: "Dars jarayoni",
      videoUrl: '/vd10.MOV'
    },
    {
      id: 11,
      name: "Dars jarayoni",
      videoUrl: '/vd11.MOV'
    },
    {
      id: 12,
      name: "Dars jarayoni",
      videoUrl: '/vd12.MOV'
    },
  ];
  </script>
  
  <style scoped>
  /* Ensure videos start playing immediately without showing controls */
  video::-webkit-media-controls-start-playback-button {
    display: none;
  }
  </style>