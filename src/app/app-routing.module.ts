import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingOneWayComponent } from './Demos/binding-one-way/binding-one-way.component';
import { BindingTwoWayComponent } from './Demos/binding-two-way/binding-two-way.component';
import { DemosPipeComponent } from './Demos/demos-pipe/demos-pipe.component';
import { DirectivesComponent } from './Demos/directives/directives.component';
import { EventBindingComponent } from './Demos/event-binding/event-binding.component';
import { FakeAuthComponent } from './Demos/fake-auth/fake-auth.component';
import { FormulaireComponent } from './Demos/formulaire/formulaire.component';
import { HttpClientComponent } from './Demos/http-client/http-client.component';
import { InjectionComponent } from './Demos/injection/injection.component';
import { ChildComponent } from './Demos/inputOutput/child/child.component';
import { ParentComponent } from './Demos/inputOutput/parent/parent.component';
import { ObservablesComponent } from './Demos/observables/observables.component';
import { RouterComponent } from './Demos/router/router/router.component';
import { SnapshotParamComponent } from './Demos/router/snapshot-param/snapshot-param.component';
import { ChronometreComponent } from './Exercices/chronometre/chronometre.component';
import { CreateComponent } from './Exercices/FanDeSerie/create/create.component';
import { DetailsComponent } from './Exercices/FanDeSerie/details/details.component';
import { ListComponent } from './Exercices/FanDeSerie/list/list.component';
import { UpdateComponent } from './Exercices/FanDeSerie/update/update.component';
import { ShoppingListServiceComponent } from './Exercices/shopping-list-service/shopping-list-service.component';
import { ShoppingItemComponent } from './Exercices/shoppingList/shopping-item/shopping-item.component';
import { ShoppingListComponent } from './Exercices/shoppingList/shopping-list/shopping-list.component';
import { PokedexComponent } from './Labo/components/pokedex/pokedex.component';
import { FooterComponent } from './Shared/components/footer/footer.component';
import { HomeComponent } from './Shared/components/home/home.component';
import { NavComponent } from './Shared/components/nav/nav.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'nav' , component : NavComponent},
  {path : 'footer' , component : FooterComponent},

  // Demonstrations
  {path : 'bindingOneWay', component : BindingOneWayComponent},
  {path : 'bindingTwoWay', component : BindingTwoWayComponent},
  {path : 'eventBinding', component : EventBindingComponent},
  {path : 'demosPipe', component : DemosPipeComponent},
  {path : 'directives', component : DirectivesComponent},
  {path : 'inputOuput', component : ParentComponent},
  {path : 'child', component : ChildComponent},
  {path : 'injection', component : InjectionComponent},
  {path : 'fakeAuth', component : FakeAuthComponent},
  {path : 'formulaire', component : FormulaireComponent},
  {path : 'router', component : RouterComponent},
  {path : 'snapshot/:idUtilisateur', component : SnapshotParamComponent},
  {path : 'fan/create', component : CreateComponent},
  {path : 'fan/update/:idFan', component : UpdateComponent},
  {path : 'fan/details/:idFan', component : DetailsComponent},
  {path : 'fan/list', component : ListComponent},
  {path : 'observable', component : ObservablesComponent},
  {path : 'httpClient', component : HttpClientComponent},

  // Exercices
  {path : 'exoChrono', component : ChronometreComponent},
  {path : 'shoppingItem', component : ShoppingItemComponent},
  {path : 'shoppingList', component : ShoppingListComponent},
  {path : 'shoppingListS', component : ShoppingListServiceComponent},

  // Labo
  {path : 'pokedex', component : PokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
