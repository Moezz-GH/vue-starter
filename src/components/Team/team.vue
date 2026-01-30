<template>
  <section class="py-16 bg-white">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-foreground md:text-4xl">Meet Our Team</h2>
        <p class="mt-4 text-lg text-muted-foreground-1 max-w-3xl mx-auto">The passionate individuals driving AtmosAid's mission forward</p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Team Member 1 -->
        <div class="text-center">
          <div class="mx-auto mb-4">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
           
          </div>
          <h3 class="text-xl font-bold text-foreground">Muhammad Alallam</h3>
          <p class="text-red-600 font-medium">Operations & Strategy Lead</p>
          <p class="mt-2 text-sm text-muted-foreground-1">Organizes meetings, sets business workflow, ensures plans and team progress, decides strategies</p>
        </div>
        
        <!-- Team Member 2 -->
        <div class="text-center">
          <div class="mx-auto mb-4">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
          </div>
          <h3 class="text-xl font-bold text-foreground">Ansam Elwaer</h3>
          <p class="text-red-600 font-medium">Public Relations & Partnerships Lead</p>
          <p class="mt-2 text-sm text-muted-foreground-1">Speaks for the team, manages outreach, builds partnerships, plans, coordinates operations</p>
        </div>
        
        <!-- Team Member 3 -->
        <div class="text-center">
          <div class="mx-auto mb-4">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
          </div>
          <h3 class="text-xl font-bold text-foreground">Reda Elalous</h3>
          <p class="text-red-600 font-medium">Marketing & Finance Lead</p>
          <p class="mt-2 text-sm text-muted-foreground-1">Overseas marketing strategy, manages budget, and financial planning</p>
        </div>
        
        <!-- Team Member 4 -->
        <div class="text-center">
          <div class="mx-auto mb-4">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
          </div>
          <h3 class="text-xl font-bold text-foreground">Abdullah</h3>
          <p class="text-red-600 font-medium">Technical & Prototype Lead</p>
          <p class="mt-2 text-sm text-muted-foreground-1">Leads drone development, manages prototypes and technical systems</p>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <div class="inline-block p-6 bg-gray-50 rounded-xl">
          <h3 class="text-xl font-bold text-foreground">Institution</h3>
          <p class="mt-2 text-lg text-muted-foreground-1">Supported by South Mediterranean University</p>
          <div class="mt-4">
            <img src="../assets/smu-logo.png" class="w-32 h-auto mx-auto" alt="South Mediterranean University">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamSection'
}
</script>