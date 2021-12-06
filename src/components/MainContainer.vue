<template>
    <div class="wrap d-flex flex-column min-vh-100 p-0">
        <header>
            <slot name="header"></slot> 
        </header>

        <main  class="flex-fill container-fluid ">
            <div class="row">
                <slot></slot>
            </div>
            
        </main>

    </div>     
</template>

<style lang="scss">
.flex-fill{
 padding-left: 0;   
}

</style>