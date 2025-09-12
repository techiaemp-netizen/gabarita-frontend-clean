'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Layout } from '../../components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { BookOpen, Clock, Trophy, Target, Calendar, Play, FileText, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const router = useRouter();

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'questoes':
        router.push('/questoes');
        break;
      case 'simulado':
        router.push('/simulado');
        break;
      case 'relatorios':
        router.push('/relatorios');
        break;
      default:
        break;
    }
  };

  return (
    <Layout title="Dashboard" subtitle="Acompanhe seu progresso nos estudos">
      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 mb-6">
        <Button variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          Cronograma
        </Button>
        <Button>
          <Play className="w-4 h-4 mr-2" />
          Novo Simulado
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card variant="elevated">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Questões Resolvidas</CardTitle>
            <BookOpen className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">1,247</div>
            <p className="text-xs text-emerald-600 mt-1">
              +12% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Taxa de Acerto</CardTitle>
            <Target className="h-5 w-5 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">85%</div>
            <p className="text-xs text-emerald-600 mt-1">
              +5% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Tempo de Estudo</CardTitle>
            <Clock className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">42h</div>
            <p className="text-xs text-slate-600 mt-1">
              Esta semana
            </p>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Ranking</CardTitle>
            <Trophy className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">#23</div>
            <p className="text-xs text-slate-600 mt-1">
              Entre 1,250 usuários
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-2">
        <Card variant="elevated" padding="none">
          <CardHeader className="px-6 lg:px-8 pt-6 lg:pt-8 pb-4 lg:pb-6">
            <CardTitle className="flex items-center text-slate-800 text-lg lg:text-xl xl:text-2xl">
              <FileText className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 mr-3 lg:mr-4 text-blue-600" />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 lg:px-8 pb-6 lg:pb-8">
            <div className="space-y-3 lg:space-y-4 xl:space-y-5">
              <Button 
                 className="w-full justify-start h-12 lg:h-14 xl:h-16 text-left font-medium hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 text-base lg:text-lg xl:text-xl px-4 lg:px-6 xl:px-8" 
                 variant="outline"
                 size="lg"
                 onClick={() => handleQuickAction('questoes')}
               >
                 <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 mr-3 lg:mr-4 xl:mr-5 text-blue-600" />
                 <span className="flex-1 text-slate-700 font-medium lg:font-semibold">Resolver Questões</span>
               </Button>
               <Button 
                 className="w-full justify-start h-12 lg:h-14 xl:h-16 text-left font-medium hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-200 text-base lg:text-lg xl:text-xl px-4 lg:px-6 xl:px-8" 
                 variant="outline"
                 size="lg"
                 onClick={() => handleQuickAction('simulado')}
               >
                 <Clock className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 mr-3 lg:mr-4 xl:mr-5 text-emerald-600" />
                 <span className="flex-1 text-slate-700 font-medium lg:font-semibold">Iniciar Simulado</span>
               </Button>
               <Button 
                 className="w-full justify-start h-12 lg:h-14 xl:h-16 text-left font-medium hover:bg-purple-50 hover:border-purple-200 transition-all duration-200 text-base lg:text-lg xl:text-xl px-4 lg:px-6 xl:px-8" 
                 variant="outline"
                 size="lg"
                 onClick={() => handleQuickAction('relatorios')}
               >
                 <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 mr-3 lg:mr-4 xl:mr-5 text-purple-600" />
                 <span className="flex-1 text-slate-700 font-medium lg:font-semibold">Ver Relatórios</span>
               </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="text-slate-800">Próximos Simulados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div>
                  <p className="font-medium text-slate-800">ENEM 2024</p>
                  <p className="text-sm text-slate-600">Matemática</p>
                </div>
                <span className="text-sm text-blue-600 font-medium">Hoje, 14h</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                <div>
                  <p className="font-medium text-slate-800">Concurso TRT</p>
                  <p className="text-sm text-slate-600">Português</p>
                </div>
                <span className="text-sm text-emerald-600 font-medium">Amanhã, 9h</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="text-slate-800">Metas da Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Questões Resolvidas</span>
                  <span className="font-medium text-slate-800">45/50</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Horas de Estudo</span>
                  <span className="font-medium text-slate-800">8/10</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full transition-all" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Simulados</span>
                  <span className="font-medium text-slate-800">2/3</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full transition-all" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}