<template>
    <div class="wrap d-flex flex-column min-vh-100 p-0">
        <header>
            <slot name="header"></slot> 
        </header>

        <main  class="flex-fill container-fluid ">
            <div class="row p-0">
                <slot></slot>
            </div>
            
        </main>

    </div>     
</template>

<style scoped>


</style>