import {Resolver, Query, Mutation, Arg, Field, InputType, Int} from "type-graphql";
import {Persona} from "../entity/Persona";

@InputType()
class PersonaInput {
    @Field()
    nombre!: string;

    @Field()
    correo!: string;

    @Field()
    telefono!: string;

    @Field()
    mensaje!: string;
}

@Resolver()
export class PersonaResolver {

    @Mutation(() => Persona)
    async createPersona(
        @Arg("datos", () => PersonaInput) datos: PersonaInput
    ){
        const newPersona = Persona.create(datos);
        return await newPersona.save();
    }

    @Query(() => [Persona])
    personas(){
        return Persona.find();
    }
}