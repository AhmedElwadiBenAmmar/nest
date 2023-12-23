import { Controller, Get, Post, Put, Delete, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('todo')
export class TodoController {
  @Get()
  getTodos(@Req() request: Request, @Res() response: Response) {
    console.log(request);
    console.log('Récupérer la liste des todos');
    response.send('Liste des Todos');
    console.log(response);
  }

  @Post()
  createTodo(@Req() request: Request, @Res() response: Response) {
    console.log('Ajouter un Todo à la liste des todos');
    response.send('Todo créé');
  }

  @Put(':id')
  updateTodo(@Req() request: Request, @Res() response: Response) {
    console.log('Mettre à jour un Todo');
    response.send('Todo mis à jour');
  }

  @Delete(':id')
  deleteTodo(@Req() request: Request, @Res() response: Response) {
    console.log('Supprimer un Todo');
    response.send('Todo supprimé');
  }
}
