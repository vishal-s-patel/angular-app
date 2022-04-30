import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayPermutationComponent } from './components/array-permutation/array-permutation.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';

const routes: Routes = [
    {
        path: 'fibonacci',
        component: FibonacciComponent
    },
    {
        path: 'permutation',
        component: ArrayPermutationComponent
    },
    {
        path: '',
        redirectTo: '/fibonacci',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }