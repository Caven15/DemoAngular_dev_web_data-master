import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Shared/components/nav/nav.component';
import { HomeComponent } from './Shared/components/home/home.component';
import { ChronometreComponent } from './Exercices/chronometre/chronometre.component';
import { BindingOneWayComponent } from './Demos/binding-one-way/binding-one-way.component';
import { BindingTwoWayComponent } from './Demos/binding-two-way/binding-two-way.component';
import { EventBindingComponent } from './Demos/event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemosPipeComponent } from './Demos/demos-pipe/demos-pipe.component';
import { DirectivesComponent } from './Demos/directives/directives.component';
import { ChildComponent } from './Demos/inputOutput/child/child.component';
import { ParentComponent } from './Demos/inputOutput/parent/parent.component';
import { ShoppingItemComponent } from './Exercices/shoppingList/shopping-item/shopping-item.component';
import { ShoppingListComponent } from './Exercices/shoppingList/shopping-list/shopping-list.component';
import { InjectionComponent } from './Demos/injection/injection.component';
import { ShoppingListServiceComponent } from './Exercices/shopping-list-service/shopping-list-service.component';
import { FakeAuthComponent } from './Demos/fake-auth/fake-auth.component';
import { FormulaireComponent } from './Demos/formulaire/formulaire.component';
import { RouterComponent } from './Demos/router/router/router.component';
import { CreateComponent } from './Exercices/FanDeSerie/create/create.component';
import { UpdateComponent } from './Exercices/FanDeSerie/update/update.component';
import { ListComponent } from './Exercices/FanDeSerie/list/list.component';
import { DetailsComponent } from './Exercices/FanDeSerie/details/details.component';
import { ObservablesComponent } from './Demos/observables/observables.component';
import { HttpClientComponent } from './Demos/http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexComponent } from './Labo/components/pokedex/pokedex.component';
import { FooterComponent } from './Shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ChronometreComponent,
    BindingOneWayComponent,
    BindingTwoWayComponent,
    EventBindingComponent,
    DemosPipeComponent,
    DirectivesComponent,
    ChildComponent,
    ParentComponent,
    ShoppingItemComponent,
    ShoppingListComponent,
    InjectionComponent,
    ShoppingListServiceComponent,
    FakeAuthComponent,
    FormulaireComponent,
    RouterComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    DetailsComponent,
    ObservablesComponent,
    HttpClientComponent,
    PokedexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
