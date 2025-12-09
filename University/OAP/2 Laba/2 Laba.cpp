//Лабораторная работа №2
// Программирование алгоритмов и разветвленной структуры
#include "iostream"
using std::cout;
using std::cin;
using std::endl;

void main()
{
  setlocale(LC_ALL, "Russian_Russia.1251");
    double x,y;
    cout << "Введите координаты точки x y" << endl;
    cin >> x >> y;
    
      if ((y>0.7) || (y<(-0.7)))
      {
        cout << "Точка не принадлежит заштрихованной области" << endl;
      } else
      {
        if ((y<0.7) && (y>(-0.7)) && (x*x+y*y<1))
        {
            cout << "Точка принадлежит заштрихованной области" << endl;
        } else
        {
          cout << "Точка на границе заштрихованной области" << endl;
        }
        
          
        

      }

    system("pause");    
    

}