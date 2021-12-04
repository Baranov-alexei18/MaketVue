<template>
    <div class="wrap d-flex flex-column min-vh-100">
        <header>
            <slot name="header"></slot> 
        </header>

        <main  class="flex-fill container-fluid p-0">
            <div class="rowp-0">
                <slot></slot>
            </div>
            
        </main>

    </div>     
</template>

<style scoped>


</style>