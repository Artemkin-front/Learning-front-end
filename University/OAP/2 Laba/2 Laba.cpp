//Лабораторная работа №2
// Программирование алгоритмов и разветвленной структуры
#include "iostream"
using std::cout;
using std::cin;
using std::endl;

void main()
{
    double x,y;
    cout << "Vvedite coordinaty x y" << endl;
    cin >> x >> y;
    
      if ((y>0.7) || (y<(-0.7)) && (x*x+y*y<1))
      {
        cout << "tochka ne vhodit" << endl;
      } else
      {
        if ((y<0.7) && (y>(-0.7)) && (x*x+y*y<1))
        {
            cout << "tochka vnutri" << endl;
        } else
        {
            if ((y==0.7) || (y==(-0.7)) && (x*x+y*y<1))
            {
                cout << "tochka na granice" << endl;
            }
        }
      }

    system("pause");    
    

}